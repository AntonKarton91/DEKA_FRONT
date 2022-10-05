import React from 'react';
import '../../../styles/UI-styles.scss'


const MarkIconComponent = ({color, child, popup, id, foo}) => {

    function getStyles() {
        if (!popup) {
            return {fontSize: '10px',
                    borderRadius: '4px',
                    maxHeight: '18px',
                    backgroundColor: color,
                    padding: '2px',
            }
        } else {
            return {
                fontSize: '10px',
                borderRadius: '4px',
                maxHeight: '22px',
                backgroundColor: color,
                padding: '4px',
            }
        }
    }

    function func(id)
        {
            foo(id)
        }

    return (
        <div className='mark' style={getStyles()} onClick={()=> func(id)}>
            {child}
        </div>
    );
};

export default MarkIconComponent;