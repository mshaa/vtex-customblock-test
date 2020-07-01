export async function dailypack(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { masterdata: masterClient },
  } = ctx

  const data = await masterClient.searchDocuments({
    dataEntity: 'dailypack', fields: ['_all'], pagination: {
      page: 1,
      pageSize: 1,
    }
  })
  console.log('data:', data)

  ctx.status = 200
  ctx.body = data

  await next()
}
