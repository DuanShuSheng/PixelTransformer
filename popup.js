// popup.js

// 获取参数
let upUnitDom = document.getElementById('up');
let downUnitDom = document.getElementById('down');
let upValueDom = document.getElementById('upValue');
let rootValueDom = document.getElementById('rootValue');
let downValueDom = document.getElementById('downValue');

upUnitDom.addEventListener('change', changeUp);
downUnitDom.addEventListener('change', changeDown);
upValueDom.addEventListener('input', changeUp);
downValueDom.addEventListener('input', changeDown);
rootValueDom.addEventListener('input', changeRoot);


function changeUp() {
  let upUnit = upUnitDom.value;
  let downUnit = downUnitDom.value;
  let upValue = upValueDom.value;
  let downValue = downValueDom.value;
  let rootValue = rootValueDom.value;
  if(upValue === ''){
    return;
  }
  if((upUnit==="rem"||downUnit==="rem")&&rootValue === ''){
    rootValue = 16;
  }
  downValueDom.value=getValue(upValue,upUnit,downUnit,rootValue);
};

function changeDown() {
  let upUnit = upUnitDom.value;
  let downUnit = downUnitDom.value;
  let upValue = upValueDom.value;
  let downValue = downValueDom.value;
  let rootValue = rootValueDom.value;
  if(downValue === ''){
    return;
  }
  if((upUnit==="rem"||downUnit==="rem")&&rootValue === ''){
    rootValue = 16;
  }
  upValueDom.value=getValue(downValue,downUnit,upUnit,rootValue);
};

function changeRoot() {
  let upUnit = upUnitDom.value;
  let downUnit = downUnitDom.value;
  let upValue = upValueDom.value;
  let downValue = downValueDom.value;
  let rootValue = rootValueDom.value;
  if((upUnit==="rem"||downUnit==="rem")&&rootValue === ''){
    rootValue = 16;
  }
  upValueDom.value=getValue(downValue,downUnit,upUnit,rootValue);
  downValueDom.value=getValue(upValue,upUnit,downUnit,rootValue);
};

function getValue(ori,oriUnit,srcUint,root) {
  if(oriUnit===srcUint){
    return ori;
  }
  switch(oriUnit){
    case 'em':
    case 'pc':
    ori*=16;
    break;
    case 'rem':
    ori*=root;
    break;
    case 'pt':
    ori*=96/72;
    break;
    case 'in':
    ori*=96;
    break;
  }
  switch(srcUint){
    case 'em':
    case 'pc':
    ori/=16;
    break;
    case 'rem':
    ori/=root;
    break;
    case 'pt':
    ori/=96/72;
    break;
    case 'in':
    ori/=96;
    break;
  }
  return ori;
};
