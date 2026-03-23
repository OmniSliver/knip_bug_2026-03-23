import { lazy, Suspense } from 'react'

const SubPageJS = lazy(
  () => import(/* webpackChunkName: "SubPageJS" */ './SubPageJS/index.js'),
)

const PageJS = () => {
  return (
    <div>
      PageJS
      <Suspense fallback={<div>Loading...</div>}>
        <SubPageJS />
      </Suspense>
    </div>
  )
}

export default PageJS
