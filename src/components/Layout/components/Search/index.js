import {
    faCircleXmark,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState , useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import styles  from './Search.module.scss';
import { faLess } from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(styles)

function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] =useState(true);

    const inputRef = useRef()

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1 , 2 ,3])
        }, 0)
    }, []);

    const handClear = () => {                
        setSearchValue('');
        setSearchResult([]);
            inputRef.current.focus();
    }
    
    const handHideResult = () => {
        setShowResult(false)
     }
    return (  
        <HeaderlessTippy
                    interactive
                    visible={showResult && searchResult.length > 0}
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                <h4 className={cx('search-title')}>
                                     Accounts
                                </h4>
                                     <AccountItem />
                                     <AccountItem />
                                     <AccountItem />
                                     <AccountItem />
                                     <AccountItem />
                                </PopperWrapper>
                            </div>                          
            )}
            onClickOutside={handHideResult}
                      >
                <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder='Search accounts and video'
                    spellCheck={false}
                    onChange={e => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && (
                    <button className={cx('clear')}
                        onClick={handClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                         {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                    
                        <button className={cx('search-btn')}>
                            <SearchIcon />
                        </button>
                   
                </div>
                </HeaderlessTippy>
    );
}

export default Search;