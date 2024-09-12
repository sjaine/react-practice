import { Children } from 'react';

export default function List({ children }) {
    return(
        <div className="RowList">
            {Children.map(children, child =>
                <div className="Row">
                    {child}
                </div>
            )}
        </div>
    );
}