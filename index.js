var avalon = require('avalon2')
var template = require('text!./template.html')

require('style!css!./oni.button.css')
require('style!css!oni.compass/oniui-common.css')

var legalType = {
  icon: 1,
  labeledIcon:1,
  text: 1
}

avalon.component('ms-button',{
  template: template,
  getTemplate: function(vm, template){
     if(vm.iconPosition){
        vm.position = vm.iconPosition
     }
     if(vm.corner){
        vm.buttonCornerClass = "oni-corner-all"
        
     }
     if(vm.size){
        vm.buttonSizeClass = 'oni-button-' + vm.size
     }
     if(vm.color){
        vm.buttonColorClass = 'oni-button-' + vm.color
     }
     if(vm.disabled){
        vm.buttonDisabledClass = 'oni-state-disabled'
     }
     var icons = vm.icon
     if(icons.length > 1){
       if(!vm.type){
         vm.type = 'labeledIcon'
       }
     }
     var iconText = false, buttonText = ""
     switch (vm.type) {
          case "text":
              buttonText = "<span class='oni-button-text'><slot name='label'></slot></span>"
              break;
          case "labeledIcon":
              iconText = true
          default:
              switch (vm.position) {
                  case "left":
                      buttonText = "<i class='oni-icon oni-icon-left'>" + icons.replace(/\\/g, "") + "</i>" + 
                              "<span class='oni-button-text oni-button-text-right" + (!iconText ? " oni-button-text-hidden" : "") + "'><slot name='label'></slot></span>"
                  break;
                  case "right":
                      buttonText = "<span class='oni-button-text oni-button-text-left" + (!iconText ? " oni-button-text-hidden" : "") + "'><slot name='label'></slot></span>" +
                              "<i class='oni-icon oni-icon-right'>" + icons.replace(/\\/g, "") + "</i>"
                  break;
                  case "left-right":
                      var iconArr = icons && icons.split("-") || ["", ""],
                          iconLeft = iconArr[0],
                          iconRight = iconArr[1]
                      buttonText = "<i class='oni-icon oni-icon-left'>" + iconLeft.replace(/\\/g, "") + "</i>" 
                              + "<span class='oni-button-text oni-button-text-middle" + (!iconText ? " oni-button-text-hidden" : "") + "'><slot name='label'></slot></span>" + 
                              "<i class='oni-icon oni-icon-right'>" + iconRight.replace(/\\/g, "") + "</i>"
                  break;
              }
          break;
        }
        return template.replace('INNER',buttonText)
  },
  defaults: {
    type: 'text', //text, icon, labeledIcon
    buttonStateClass: 'oni-state-default',
    buttonCornerClass: '',
    position: 'left',
    label: '',
    iconPosition: '', //@config 当type为icon或者labeledIcon时，定义icon在哪边，默认在text的左边，也可以配置为右边("right"),或者两边都有("left-right")
    icon: "", //@config  当type为icon或者labeledIcon时，定义展示icon的内容，本组件的icon是使用web font实现，当iconPosition为"left"或者"right"时，将icon的码赋给icon，当iconPosition为"left-right",将left icon与right icon的码以"-"分隔，比如data-button-icon="\&\#xf001;-\&\#xf06b;"
    size: "", //@config button有四个尺寸"small", "default", "big", "large"
    color: "", //@config 定义button的颜色，默认提供了"primary", "warning", "danger", "success", "info", "inverse", "default" 7中颜色，与bootstrap保持一致
    corner: true, //@config 设置是否显示圆角，可以布尔值或者Number类型，布尔只是简单的说明显示或者不显示，Number则在表示显示与否的同时，也是在指定圆角的大小，圆角默认是2px。
    style: "", // 用于定义button的展现形式，比如"flat" "glow" "rounded" "3D" "pill" 本组件，仅提供flat的实现
    disabled: false, //@config 配置button的禁用状态
    width: "auto" //@config 设置button的宽度，注意button的盒模型设为了border-box
  },
  soleSlot: "label"
})
