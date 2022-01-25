import React from 'react';
import { Typography } from '@mui/material';
import './ErrorPage.scss';
//returns error page for unsucessfull attempts
function ErrorPage()
{
    return(
        <div className="error">
        <Typography variant="h5" display="block" component="div" gutterBottom align='center'>
                            404 Page not Found
                        </Typography>
        </div>
    )
}
//default export of error page
export default ErrorPage;