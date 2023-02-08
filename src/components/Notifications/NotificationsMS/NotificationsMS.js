import { Alert , Row } from 'react-bootstrap';
import './NotificationsMS.css';
import { IoIosClose } from 'react-icons/io'

export default function NotificationsMS() {

    return(
        <Row className='notificationsAlert'>
            {
                [
                    {
                        variant: 'primary',
                        message: "A simple primary  alert with Give it a cliick f you like.",
                    },
                    {
                        variant: 'secondary',
                        message: "A simple secondary  alert with Give it a cliick f you like.",
                    },
                    {
                        variant:'success',
                        message: "A simple success  alert with Give it a cliick f you like.",
                    },
                    {
                        variant: 'danger',
                        message: "A simple error  alert with Give it a cliick f you like.",
                    },
                    {
                        variant: 'warning',
                        message: "A simple warning  alert with Give it a cliick f you like.",
                    },
                    {
                        variant: 'info',
                        message: "A simple info  alert with Give it a cliick f you like.",
                    },
                    {
                        variant: 'light',
                        message: "A simple light  alert with Give it a cliick f you like.",
                    },
                    {
                        variant: 'dark',
                        message: "A simple dark  alert with Give it a cliick f you like.",
                    }
                ].map((alert) => {

                    return(

                    <Alert key={alert.variant} variant={alert.variant}>

                    <span>

                        { alert.message }
                        <strong>
                            an example link                        
                        </strong>
                    </span>

                    <IoIosClose />

                    </Alert>
                    )
                })
            } 
        </Row>
    );
}