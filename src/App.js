import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import LayoutCon from './component/layout';
import './App.css';

class App extends Component {
  componentDidMount() {
    // let canvas = document.getElementById("canvas");
    // canvas.width = 1500;
    // canvas.height = 1000;
    // let context = canvas.getContext("2d");

    // drawBlackWhite(context)
    /*折线*/
    // drawLine(context)
    /*矩形,有定义好的方法：rect()*/
    // drawRec(context)
    /*线端点*/
    // lineCap(context)
    // lineJoin(context)
    // miterLimit(context)
    /*渐变*/
    // gradient(context)
    // gradientRect(context)
    // gradientRad(context)
    /*纹理*/
    // getPattern(context)
    /*圆角矩形(弧线)*/
    // radRect(context)
    // draw2048(context)
    /*切点弧线*/
    // drawArcTo(context, 200, 200, 600, 200, 600, 400, 200)
    /*贝塞尔曲线*/
    // drawCurve2(context)
    // drawCurve3(context)
    /*变换方法*/
    /*平移*/
    // translate(context)
    /*旋转*/
    // rotate(context)
    // rotate2(context)
    /*缩放*/
    // scale(context)
    /*矩阵变换*/
    // transform1(context)
    // setTransform(context)
    /*文本*/
    // fontTest(context)
    // fontRender(context)
    // textAlign(context)
    // textBaseline(context)
    // measureText(context)
    /*高阶API*/
    // globalAlpha(canvas, context)
    // globalCompositeOperation(canvas, context)
    // clip(context)
    // drawImage(context)
    // rahmen(context)
    // arcTwo(context)
    // drawPath(context)
    // isPointInPathFn(canvas, context)
  }

  render() {
    return (
      <div className="app-container">
        <LayoutCon/>
      </div>
    )
  }
}

export default App;
