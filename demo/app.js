const shell = document.querySelector('.app-shell');
const drawer = document.querySelector('#drawer');
const scrim = document.querySelector('#scrim');
const toast = document.querySelector('#toast');
let timer;

function toastMessage(text) {
  toast.textContent = text;
  toast.classList.add('show');
  clearTimeout(timer);
  timer = setTimeout(() => toast.classList.remove('show'), 2200);
}
function drawerState(open) {
  drawer.classList.toggle('open', open);
  scrim.classList.toggle('show', open);
}
function showPage(page) {
  document.querySelectorAll('[data-view]').forEach((view) => view.classList.toggle('hidden', view.dataset.view !== page));
  document.querySelectorAll('.nav-item').forEach((item) => item.classList.toggle('active', item.dataset.page === page));
  document.querySelector('#breadcrumb').textContent = ({overview:'总览',discovery:'探索发现',library:'媒体库',downloads:'下载管理',accounts:'账号配置',queue:'任务队列',logs:'运行日志',settings:'系统设置'})[page];
  drawerState(false);
  scrollTo({top: 0, behavior: 'smooth'});
}

document.querySelector('#menuToggle').onclick = () => drawerState(!drawer.classList.contains('open'));
scrim.onclick = () => drawerState(false);
document.querySelectorAll('.nav-item').forEach((item) => item.onclick = () => showPage(item.dataset.page));
document.querySelectorAll('[data-page-link]').forEach((item) => item.onclick = () => showPage(item.dataset.pageLink));
document.querySelectorAll('[data-toast]').forEach((item) => item.onclick = () => toastMessage(item.dataset.toast));
document.querySelector('#themeToggle').onclick = () => shell.classList.toggle('dark');
document.querySelector('#searchToggle').onclick = () => document.querySelector('#searchDialog').showModal();
document.querySelector('#assistant').onclick = () => document.querySelector('#assistantPanel').classList.remove('hidden');
document.querySelector('#assistantClose').onclick = () => document.querySelector('#assistantPanel').classList.add('hidden');
document.querySelector('#refresh').onclick = (event) => {
  const button = event.currentTarget;
  button.disabled = true;
  button.textContent = '↻ 刷新中…';
  setTimeout(() => {
    button.disabled = false;
    button.textContent = '↻ 刷新';
    document.querySelector('#sampleTime').textContent = '刚刚更新';
    toastMessage('数据已刷新');
  }, 650);
};
document.addEventListener('keydown', (event) => {
  if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key.toLowerCase() === 'f') {
    event.preventDefault();
    document.querySelector('#searchDialog').showModal();
  }
});
document.querySelectorAll('.tabs button,.settings-nav button').forEach((button) => button.onclick = () => {
  button.parentElement.querySelectorAll('button').forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
});
