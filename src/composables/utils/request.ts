import { NitroFetchRequest, NitroFetchOptions } from 'nitropack'

interface IRequestData<T> {
  error: number
  data: T
  msg: string
}

const codeMessage = {
  // 200: '服务器成功返回请求的数据。',
  200: 'The server successfully returned the requested data.',
  // 201: '新建或修改数据成功。',
  201: 'Create or modify data successfully.',
  // 202: '一个请求已经进入后台排队（异步任务）。',
  202: 'A request has entered the background queue (asynchronous task).',
  // 204: '删除数据成功。',
  204: 'Data deleted successfully.',
  // 206: '进行范围请求成功。',
  206: 'Successful range request.',
  // 400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  400: 'Bad error request, and the server did not create or modify the data.',
  // 401: '用户没有权限（令牌、用户名、密码错误）。',
  401: 'User does not have permission (invalid username, password, security token).',
  // 403: '用户得到授权，但是访问是被禁止的。',
  403: 'User is authorized, but access is forbidden.',
  // 404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  404: 'The request sent is for a record that does not exist, and the server does not operate.',
  // 405: '请求不允许。',
  405: 'Request denied.',
  // 406: '请求的格式不可得。',
  406: 'Requested format not available.',
  // 410: '请求的资源被永久删除，且不会再得到的。',
  410: 'The requested resource is permanently deleted and will no longer be available.',
  // 422: '当创建一个对象时，发生一个验证错误。',
  422: 'When creating an object, a validation error occurrs.',
  // 500: '服务器发生错误，请检查服务器。',
  500: 'An error occurred in the server, please check the server.',
  // 502: '网关错误。',
  502: 'Bad Gateway Error.',
  // 503: '服务不可用，服务器暂时过载或维护。',
  503: 'The server is temporarily unable to service your request due to maintenance downtime or capacity problems.',
  // 504: '网关超时。'
  504: 'Gateway Timeout.'
}


export async function useCustomFetch<T> (
  swRequest: string,
  swRequestOptions?: NitroFetchOptions<NitroFetchRequest, 'get' | 'head' | 'patch' | 'post' | 'put' | 'delete' | 'connect' | 'options' | 'trace'> | undefined
): Promise<IRequestData<T>> {
  const config = useRuntimeConfig()

  const results = <IRequestData<T>>({
    error: 0,
    data: {} as T,
    msg: ''
  })

  try {
    const { data, error, msg } = await $fetch<IRequestData<T>>(swRequest, {
      baseURL: config.public.baseApi,
      headers: {
        // TODO: 开发环境临时使用，上生产时须替换掉
        'ngrok-skip-browser-warning': '69420'
        // Authorization: 'xxxxxx'
      },
      ...swRequestOptions
    })

    results.data = data
    results.error = error
    results.msg = msg
  } catch (error: any) {
    results.data = {} as T
    results.error = error.status || 5000
    results.msg = codeMessage[(error.status) as keyof typeof codeMessage] || codeMessage['406']
  }

  return results
}

