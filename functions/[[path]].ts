import { createRequestHandler } from '@tanstack/react-start-server'
// @ts-ignore
import * as build from '../dist/server/server.js'

export const onRequest: PagesFunction = async (context) => {
  const handler = createRequestHandler({ build })
  return handler(context.request)
}
