import Alert from 'react-bootstrap/Alert';

export default function BoostrapDemo(){
    return(
        <div >

            <h1 style={{backgroundColor:'red'}}>Hello Boostrap</h1>
            
    
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
      </div>
    )

}
