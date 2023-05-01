import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()
  return (
    <div>
    <p className="text-danger fs-5">{error.status || error.message}</p>
    </div>
  )
}

export default ErrorPage