const style = {
    section: {
        display:' grid',
        gridTemplateColumns: 'repeat(auto-fill,minmax(300px, .5fr))',
        gridTemplateRows: 'repeat(auto-fill,minmax(auto-fit, 1fr))',
        gridGap: '1rem'
    },
    sectionItemWrapper: {
        justifySelf: 'center',
        alignSelf: 'end'
    },
    sectionItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderBottom: '1px solid #DEDEDE',
        padding: '10px 0',
    },
    sectionContent: {
        background: '#051A40',
        width: '100%',
        padding: '1rem',
        margin: '1rem 0'
    },
    sectionDetails: {
        padding: '1rem'
    },
    content: {
        margin: '1rem 0',
    },
    whiteTypography: {
        background: '#051A40', 
        width: '100%', 
        textAlign:'center',
        borderRadius: '5px',
        height: '48px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    typography: {
        width: '100%', 
        textAlign:'center',
        height: '48px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tag: {
        color: '#019193'
    },
    attr: {
        color: '#94BA1D'
    },
    value: {
        color: '#D4426A'
    },
    details: {
        color: '#632B7D'
    }
}

export default style