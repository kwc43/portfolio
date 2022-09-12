import React from "react";
import Model from "./model";

interface SceneProps {
  children?: React.ReactNode;
}

interface SceneState {}

export default class Scene extends React.Component<SceneProps, SceneState> {
  private canvasRef: React.RefObject<HTMLCanvasElement>;

  private model: Object;

  constructor(props: SceneProps) {
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

  componentDidUpdate(prevProps: SceneProps, prevState: SceneState) {}

  componentWillUnmount() {}

  render() {
    return <canvas className="m-auto w-1/2 h-full" ref={this.canvasRef}/>;
  }
}
