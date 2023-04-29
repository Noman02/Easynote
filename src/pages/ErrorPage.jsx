import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()
  return (
    <div>
        <p>Simpel error page make interactive later!!</p>
        <p>there is an error...</p>

        <p>{error.status || error.message}</p>
    </div>
  )
}

export default ErrorPage