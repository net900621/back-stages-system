import moment from 'moment';

export const timeStrFormat = (time_str: number | undefined) => {
  if (!time_str) {
    return '';
  } else {
    return moment(time_str).format('YYYY/MM/DD HH:mm:ss');
  }
};
// 递归遍历树结构数据
export const travelWidely = (nodes: any = [], dealNodeCb?: any) => {
  if (!Array.isArray(nodes)) {
    return nodes;
  }
  const queue = [...nodes];
  while (queue.length) {
    let node = queue.shift();
    if (node) {
      const dealNode = dealNodeCb?.(node);
      node = dealNode || node;
    }
    if (node?.children?.length) {
      queue.push(...node.children);
    }
  }
  return false;
};

export const getParams = (search: string) => {
  const params: {
    [index: string]: string;
  } = {};
  search
    .replace('?', '')
    .split('&')
    .forEach((v: string) => {
      const _params = v.split('=');
      params[_params[0]] = _params[1];
    });
  return params;
};
