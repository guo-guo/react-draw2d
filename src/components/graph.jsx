import React        from 'react';

export default (props) => {

    var canvas = new draw2d.Canvas(props.divId);

    canvas.add( new draw2d.shape.basic.Oval(),100,100);
    canvas.add( new draw2d.shape.basic.Rectangle(),120,150);

    canvas.add( new draw2d.shape.node.Start(), 80,80);
    canvas.add( new draw2d.shape.node.Start(), 50,50);

    canvas.add( new draw2d.shape.node.End(), 150,150);
    canvas.add( new draw2d.shape.node.End(), 350,250);

}