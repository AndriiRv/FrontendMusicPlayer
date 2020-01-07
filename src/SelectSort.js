import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function SelectSort() {

    // let handleCategories = ({target}) => {
    //     this.props.history.push(`${target.value}`);
    // };

    return (
        <div className="SelectSort">

            <Link to='/track'>
                <h3>def</h3>
            </Link>
            <Link to='/date=DESC'>
                <h3>date=DESC</h3>
            </Link>
            <Link to='/title=DESC'>
                <h3>title=DESC</h3>
            </Link>

            {/*<select size="1" id="idSort"*/}
            {/*        onInvalid="setCustomValidity('Select the sort')" onInput="setCustomValidity('')"*/}
            {/*        className="custom-select">*/}

            {/*    <option value='/'>qq</option>*/}
            {/*    <option value='/date=DESC'>Last added</option>*/}
            {/*    <option value="/title=ASC">Alphabetically</option>*/}
            {/*    <option value="/title=DESC">Reverse alphabetically</option>*/}
            {/*    <option value="/size=ASC">Smaller size</option>*/}
            {/*    <option value="/size=DESC">Bigger size</option>*/}
            {/*    <option value="/date=ASC">First added</option>*/}
            {/*    <option value="/length=ASC">Shorter length</option>*/}
            {/*    <option value="/length=DESC">Longer length</option>*/}

            {/*</select>*/}
        </div>
    );
}

export default SelectSort;