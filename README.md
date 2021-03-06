# oni.button
avalon.oniui2 button and buttonset component

```javascript
npm install oni.button
```

<img width='600' height='200' src="https://raw.githubusercontent.com/RubyLouvre/oni.button/master/button.png"/>


<img width='408' height='282' src="https://raw.githubusercontent.com/RubyLouvre/oni.button/master/buttonset.png"/>

###button

```html
<ms-button>buttonText</ms-button>
<template ms-widget="{is:'ms-button',type:'labeledIcon',position: 'left',icon:'\&\#xf088;'}">aaa</template>
<xmp ms-widget="{is:'ms-button',type:'labeledIcon',position: 'right',icon:'\&\#xf06b;'}">bbb</xmp>
```

| prop |default | type |description |
|------|:---:|:--:|--------------|
| type | 'text' | text','icon','labeledIcon'  |  the type of button |
| width | 'auto'| number  | the width of the button       |
| position  |'left' |'left','right','left-right'|this position of icons |
| size |"default"| "small", "default", "big", "large"| the size of the button  |
| disabled |false| boolean| the state of the button |
| color |"default"| "primary", "warning", "danger", "success", "info", "inverse", "default"| the style of the button, as same as bootstrap  |
| corner | 2 |true or number | the borderRadius value of button|


###tricks
If you want to display **ICON** type, you don't write **icon** or **type** in the MS-WIDGET configuration, 
instead of  whiting **icon** text in the `<ms-button>` innerText directly

```html
<!--no "icon" configuration item-->
<ms-button slot='button' ms-widget="{type:'icon'}">&#xf084;</ms-button>

```

If you want to display **LABELEDICON** type, you don't write **type** in the MS-WIDGET configuration, 
instead of  whiting **icon** and **position** configuration item

```html
<!--no "type" configuration item-->
<ms-button ms-widget="{position: 'left-right',icon:'\&\#xf047;-\&\#xf03e;'}">has labeled</ms-button>

```


###buttonset

```html
<ms-buttonset ms-widget='{width: 60}'>
    <ms-button slot='button'>按钮1</ms-button>
    <ms-button slot='button'>按钮2</ms-button>
    <ms-button slot='button'>按钮3</ms-button>
</ms-buttonset>
```

| prop |default | type |description |
|------|:---:|:--:|--------------|
| isVertical | true | boolean  | the arrangement of the buttons |
| width | 'auto'| number  | the width of buttons     |


