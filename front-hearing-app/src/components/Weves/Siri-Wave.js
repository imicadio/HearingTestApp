import React, { Component } from "react";

class SiriWave {
  constructor(opt) {
    opt = opt || {};

    this.phase = 0;
    this.run = false;

    // UI vars
    this.ratio = window.devicePixelRatio || 1;

    this.width = this.ratio * (opt.width || 320);
    this.width_2 = this.width / 2;
    this.width_4 = this.width / 4;

    this.height = this.ratio * (opt.height || 100);
    this.height_2 = this.height / 2;

    this.MAX = this.height_2 - 4;

    // Constructor opt
    this.amplitude = opt.amplitude || 1;
    this.speed = opt.speed || 0.2;
    this.frequency = opt.frequency || 6;
    this.color =
      (function hex2rgb(hex) {
        let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function(m, r, g, b) {
          return r + r + g + g + b + b;
        });
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
          ? parseInt(result[1], 16).toString() +
              "," +
              parseInt(result[2], 16).toString() +
              "," +
              parseInt(result[3], 16).toString()
          : null;
      })(opt.color || "#fff") || "255,255,255";

    // Canvas
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    if (opt.cover) {
      this.canvas.style.width = this.canvas.style.height = "100%";
    } else {
      this.canvas.style.width = this.width / this.ratio + "px";
      this.canvas.style.height = this.height / this.ratio + "px";
    }

    this.container = opt.container || document.body;
    this.container.appendChild(this.canvas);

    this.ctx = this.canvas.getContext("2d");

    // Start
    if (opt.autostart) {
      this.start();
    }
  }
  _GATF_cache = {};
  _globAttFunc = x => {
    if (this._GATF_cache[x] == null) {
      this._GATF_cache[x] = Math.pow(4 / (4 + Math.pow(x, 4)), 4);
    }
    return this._GATF_cache[x];
  };
  _xpos = i => {
    return this.width_2 + i * this.width_4;
  };
  _ypos = (i, attenuation) => {
    let att = this.MAX * this.amplitude / attenuation;
    return (
      this.height_2 +
      this._globAttFunc(i) * att * Math.sin(this.frequency * i - this.phase)
    );
  };
  _drawLine = (attenuation, color, width) => {
    this.ctx.moveTo(0, 0);
    this.ctx.beginPath();
    this.ctx.strokeStyle = color;
    this.ctx.lineWidth = width || 1;

    let i = -2;
    while ((i += 0.01) <= 2) {
      let y = this._ypos(i, attenuation);
      if (Math.abs(i) >= 1.9) y = this.height_2;
      this.ctx.lineTo(this._xpos(i), y);
    }

    this.ctx.stroke();
  };
  _clear = () => {
    this.ctx.globalCompositeOperation = "destination-out";
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.globalCompositeOperation = "source-over";
  };
  _draw = () => {
    if (this.run === false) return;

    this.phase = (this.phase + Math.PI * this.speed) % (2 * Math.PI);

    this._clear();
    this._drawLine(-2, "rgba(" + this.color + ",0.1)");
    this._drawLine(-6, "rgba(" + this.color + ",0.2)");
    this._drawLine(4, "rgba(" + this.color + ",0.4)");
    this._drawLine(2, "rgba(" + this.color + ",0.6)");
    this._drawLine(1, "rgba(" + this.color + ",1)", 1.5);

    if (window.requestAnimationFrame) {
      requestAnimationFrame(this._draw.bind(this));
      return;
    }
    setTimeout(this._draw.bind(this), 20);
  };
  start = () => {
    this.phase = 0;
    this.run = true;
    this._draw();
  };
  stop = () => {
    this.phase = 0;
    this.run = false;
  };
  setSpeed = v => {
    this.speed = v;
  };
  setNoise = v => {
    this.amplitude = Math.max(Math.min(v, 1), 0);
  };
  setAmplitude = v => {
    this.amplitude = Math.max(Math.min(v, 1), 0);
  };
}

const hex2rgb = hex => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? parseInt(result[1], 16).toString() +
        "," +
        parseInt(result[2], 16).toString() +
        "," +
        parseInt(result[3], 16).toString()
    : null;
};

class SiriWaveWrap extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.className !== nextProps.className;
  }
  render() {
    const { className } = this.props;
    return (
      <div
        ref={wavefrom => {
          this.wavefromEle = wavefrom;
        }}
        className={className}
      />
    );
  }
  componentDidMount() {
    // this.wavefromEle.style.margin = -(this.props.opt.height / 2) + "px auto";
    this.swobj = new SiriWave({
      container: this.wavefromEle,
      ...this.props.opt
    });
    this.swobj.start();

    this.resizeFn = () => {
      let height = window.innerHeight * 0.3;
      let width = window.innerWidth;
      this.swobj.height = height;
      this.swobj.height_2 = height / 2;
      this.swobj.MAX = this.swobj.height_2 - 4;
      this.swobj.width = width;
      this.swobj.width_2 = width / 2;
      this.swobj.width_4 = width / 4;
      this.swobj.canvas.height = height;
      this.swobj.canvas.width = width;
      this.swobj.container.style.margin = -(height / 2) + "px auto";
    };
    window.addEventListener("resize", this.resizeFn);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeFn);
  }
}

SiriWaveWrap.defaultProps = {
  className: ""
};

export default SiriWaveWrap;
