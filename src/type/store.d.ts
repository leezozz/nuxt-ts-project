interface IRequestData<T> {
  error: number
  data: T
  msg: string
}

type IStoreFilterCallBack = (res: IRequestData) => Promise<IRequestData> | void
