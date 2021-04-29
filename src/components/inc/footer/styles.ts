import { createStyles, makeStyles } from '@material-ui/core';

const FooterStyles = makeStyles((theme) =>
    createStyles({
        nativeSelect: {
            '&::before': {
                border: 'none !important',
            },
        },
    })
);

export default FooterStyles;
