import React from "react";
import Model from "./model";

interface CanvasProps {
  children?: React.ReactNode;
}

interface CanvasState {}

export default class Canvas extends React.Component<CanvasProps, CanvasState> {
  private canvasRef: React.RefObject<HTMLCanvasElement>;

  private model: Object;

  constructor(props: CanvasProps) {
    super(props);
    this.canvasRef = React.createRef();
    this.model = [];
  }

  // Componenet Lifecycle
  componentDidMount() {
    const canvas = this.canvasRef.current;
    //Take this from props in future
    const modelPath = "/wooden_fox_kit_figure/scene.gltf";
    this.model = new Model(canvas!, modelPath);
  }

  componentDidUpdate(prevProps: CanvasProps, prevState: CanvasState) {}

  componentWillUnmount() {}

  render() {
    return <canvas className="m-auto w-1/2 h-full" ref={this.canvasRef}/>;
  }
}
