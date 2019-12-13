import {drawLine} from "../util/折线/drawLine";
import {drawRec} from "../util/矩形/drawRec";
import {drawBlackWhite} from '../util/drawMaze';
import {lineCap} from "../util/线端点/lineCap";
import {lineJoin} from "../util/线端点/lineJoin";
import {miterLimit} from "../util/线端点/miterLimit";
import {gradient} from "../util/渐变/gradient";
import {gradientRect} from "../util/渐变/gradientRect";
import {gradientRad} from "../util/渐变/gradientRad";
import {getPattern} from "../util/纹理（图片填充）/patternImg";
import {radRect} from "../util/圆角矩形/radRect";
import {draw2048} from "../util/圆角矩形/2048";
import {drawArcTo} from "../util/切点弧线/drawArcTo";
import {drawCurve2} from "../util/贝塞尔曲线/drawCurve2";
import {drawCurve3} from "../util/贝塞尔曲线/drawCurve3";
import {translate} from "../util/变换/translate";
import {rotate} from "../util/变换/rotate";
import {rotate2} from "../util/变换/rotate2";
import {scale} from "../util/变换/scale";
import {transform1} from "../util/变换/transform1";
import {setTransform} from "../util/变换/setTransform";
import {fontTest} from "../util/文本/fontTest";
import {fontRender} from "../util/文本/fontRender";
import {textAlign} from "../util/文本/textAlign";
import {textBaseline} from "../util/文本/textBaseline";
import {measureText} from "../util/文本/measureText";
import {globalAlpha} from "../util/高阶API/globalAlpha";
import {globalCompositeOperation} from "../util/高阶API/globalCompositeOperation";
import {clip} from "../util/高阶API/clip";
import {drawImage} from "../util/高阶API/drawImage";
import {rahmen} from "../util/高阶API/rahmen";
import {arcTwo} from "../util/高阶API/arcTwo";
import {drawPath} from "../util/高阶API/drawPath";
import {isPointInPathFn} from "../util/高阶API/isPointInPath";

export const menuItemData = [
  {
    type: '折线',
    child: [
      {
        type: 'drawLine',
        fn: drawLine
      }
    ]
  },
  {
    type: '矩形',
    child: [
      {
        type: 'drawRec',
        // fn: drawRec()
      }
    ]
  },
  {
    type: '线端点',
    child: [
      {
        type: 'lineCap',
        // fn: lineCap()
      }, {
        type: 'lineJoin',
        // fn: lineJoin()
      }, {
        type: 'miterLimit',
        // fn: miterLimit()
      }
    ]
  },
  {
    type: '渐变',
    child: [
      {
        type: 'gradient',
        // fn: gradient()
      }, {
        type: 'gradientRect',
        // fn: gradientRect()
      }, {
        type: 'gradientRad',
        // fn: gradientRad()
      }
    ]
  },
  {
    type: '纹理',
    child: [
      {
        type: 'getPattern',
        // fn: getPattern()
      }
    ]
  },
  {
    type: '圆角矩形（弧形）',
    child: [
      {
        type: 'radRect',
        // fn: radRect()
      }, {
        type: 'draw2048',
        // fn: draw2048()
      }
    ]
  },
  {
    type: '切点弧线',
    child: [
      {
        type: 'drawArcTo',
        // fn: 'drawArcTo'
      }
    ]
  },
  {
    type: '贝塞尔曲线',
    child: [
      {
        type: 'drawCurve2',
        // fn: drawCurve2()
      }, {
        type: 'drawCurve3',
        // fn: drawCurve3()
      }
    ]
  },
  {
    type: '变化方法',
    child: [
      {
        type: '平移-translate',
        // fn: translate()
      }, {
        type: '旋转',
        child: [
          {
            type: 'rotate',
            // fn: rotate()
          }, {
            type: 'rotate2',
            // fn: rotate2()
          }
        ]
      }, {
        type: '缩放-scale',
        // fn: scale()
      }, {
        type: '矩阵变换',
        child: [
          {
            type: 'transform1',
            // fn: transform1()
          }, {
            type: 'setTransform',
            // fn: setTransform()
          }
        ]
      }
    ]
  },
  {
    type: '文本',
    child: [
      {
        type: 'fontTest',
        // fn: fontTest()
      },
      {
        type: 'fontRender',
        // fn: fontRender()
      },
      {
        type: 'textAlign',
        // fn: textAlign()
      },
      {
        type: 'textBaseline',
        // fn: textBaseline()
      },
      {
        type: 'measureText',
        // fn: measureText()
      }
    ]
  },
  {
    type: '高阶API',
    child: [
      {
        type: 'globalAlpha',
        // fn: 'globalAlpha()'
      },
      {
        type: 'globalCompositeOperation',
        // fn: 'globalCompositeOperation()'
      },
      {
        type: 'clip',
        // fn: clip()
      },
      {
        type: 'drawImage',
        // fn: drawImage()
      },
      {
        type: 'rahmen',
        // fn: rahmen()
      },
      {
        type: 'arcTwo',
        // fn: arcTwo()
      },
      {
        type: 'drawPath',
        // fn: drawPath()
      },
      {
        type: 'isPointInPathFn',
        // fn: 'isPointInPathFn()'
      }
    ]
  }
];
