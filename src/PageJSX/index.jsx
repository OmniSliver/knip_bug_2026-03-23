import { lazy, Suspense } from 'react'

const SubPageJSX = lazy(
  () => import(/* webpackChunkName: "SubPageJSX" */ './SubPageJSX/index.jsx'),
)

const PageJSX = () => {
  return (
    <div>
      PageJSX
      <Suspense fallback={<div>Loading...</div>}>
        <SubPageJSX />
      </Suspense>
    </div>
  )
}

export default PageJSX
