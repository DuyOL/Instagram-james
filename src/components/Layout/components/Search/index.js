import {
    faCircleXmark,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/apiServices/searchServices'

const cx = classNames.bind(styles)

function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] =useState(true);
    const [loading, setLoading] = useState(false);
    
    const debounced = useDebounce(searchValue, 800)

    const inputRef = useRef()

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        
        const fetchApi = async () => { 
            setLoading(true);
            const result = await searchServices.search(debounced);
            setSearchResult(result);

            setLoading(false);
        }
        fetchApi()
    }, [debounced]);

    const handClear = () => {                
        setSearchValue('');
        setSearchResult([]);
            inputRef.current.focus();
    }
    
    const handHideResult = () => {
        setShowResult(false)
    }
    
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue)
        }

    }
    return (  
      // Tại sao lại là Div ?
      // Sử dụng thẻ bao bọc <div> xung quanh phần tử tham chiếu sẽ giải quyết
      // điều này bằng cách tạo một ngữ cảnh parrentNode mới
        <div>
            <HeaderlessTippy
                //    appendTo={() => document.body} // fix lỗi appendTo
                        interactive
                        visible={showResult && searchResult.length > 0}
                        render={attrs => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                    <h4 className={cx('search-title')}>
                                         Accounts
                                    </h4>
                                    {searchResult.map((result) => {
                                        return <AccountItem key={result.id} data={result} />;
                                    })}
    
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
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')}
                            onClick={handClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                             {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />} 
                        
                            <button className={cx('search-btn')} onMouseDown= {(e) => e.preventDefault()}>
                                <SearchIcon />
                            </button>
                       
                    </div>
                    </HeaderlessTippy>
         </div>
    );
}

export default Search;