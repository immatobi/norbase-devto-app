import React from 'react';

const DevForem = () => {

    return (
        <>
            <div className='devto-box'>

                <p className='fs-16 mrgb0' > 
                    <span className='fs-16 mrgb1 text-muted'>DEV runs on 100% open source code known as </span> 
                    <a href='https://github.com/forem/forem' target="_blank" className='brand-purple'>Forem</a>.
                </p>
                <p className='fs-16 mrgb' > 
                    <span className='fs-16 mrgb1 text-muted'>Contribute to the codebase or host your own! </span> 
                </p>

                <span className='text-muted font-weight-bold onblack fs-17'>Check these out! 👇</span>

                <ul className='pdt1 pdb1 pdl2'>

                    <li>
                        <a href="https://github.com/forem/forem" target="_blank">
                            <span className='brand-purple fs-15'>Main Forem Repo</span>
                        </a>
                    </li>

                    <li>
                        <a href="https://github.com/forem/selfhost" target="_blank">
                            <span className='brand-purple fs-15'>Self-Host Instructions</span>
                        </a>
                    </li>
                
                </ul>

            </div>
        </>
    )

}

export default DevForem;