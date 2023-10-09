export function filterResponse <T> (
  res: IRequestData<T>,
  successCb?: IStoreFilterCallBack | undefined | null,
  errorCb?: IStoreFilterCallBack | undefined | null
) :Promise<IRequestData<T>> {
  return new Promise((resolve) => {
    if (res && res.error === 0) {
      try {
        successCb && successCb(res)
      } catch (error: any) {
        throw new Error(error)
      }
    } else {
      errorCb && errorCb(res)
    }
    resolve(res)
  })
}

export type filterResponseTypes = typeof filterResponse
