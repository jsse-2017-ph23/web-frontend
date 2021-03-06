import * as React from 'react'
import * as firebase from 'firebase/app'
const storage = firebase.storage()

interface IFBStorageImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  path: string
}

interface IFBStorageImageState {
  src: string | null
}

export class FBStorageImage extends React.Component {
  public props: IFBStorageImageProps
  public state: IFBStorageImageState = {
    src: null
  }

  public componentWillReceiveProps(newProps: IFBStorageImageProps) {
    if (newProps.path !== this.props.path) {
      this.update(newProps.path)
    }
  }

  public componentWillMount() {
    this.update(this.props.path)
  }

  public render() {
    const {src} = this.state
    // tslint-disable-next-line:no-unused-vars
    const {path, ...rest} = this.props
    if (src) {
      return <img {...rest} src={src} />
    }
    return null
  }

  private update = async (path: string) => {
    const url = await storage.ref(path).getDownloadURL()
    this.setState({
      src: url
    })
  }
}
