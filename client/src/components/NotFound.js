import React, {Fragment} from 'react'

export const NotFound = () => {
    return (
        <Fragment>
            <h1 className='x-large text-primary'>
                <i className='fas fa exlamation-triangle' /> ບໍມີຫນ້າເວັບທີ່ທ່ານຄົ້ນຫາ ທົດລອງໃຫມ່ ຂໍໂທດຫລາຍໆເດີທ່ານ :-) 
            </h1>
            <p className='large'>Sorry, this page does not exist</p>
        </Fragment>
    );
};

export default NotFound;
