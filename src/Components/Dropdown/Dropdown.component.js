import React, { PureComponent } from 'react'

import './Dropdown.component.scss';

export default class Dropdown extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            selectedItem: undefined
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.items !== nextProps.items) {
            this.setState({ selectedItem: null });
        }
    }

    render() {
        const placeholder = this.props.placeholder || 'Выбери...';
        const selectedItemValue = this.state.selectedItem && this.state.selectedItem.value;

        return (
            <div className='dropdown-wrapper' ref={(ref) => this.wrapRef = ref}>
                <span
                    onClick={this.onToggle}
                    className='dropdown-input'>
                    {selectedItemValue || placeholder}
                </span>
                {this.state.isOpen
                    ? this.renderList()
                    : null
                }
            </div>
        )
    }

    renderList() {
        const items = this.props.items || [];

        return (
            <div className='dropdown-list'>
                {items.length
                    ? items.map(item => (
                        <div
                            key={item.id}
                            onClick={this.onClickFabric(item)}
                            className="list-item">{item.value}</div>
                    ))
                    : <div
                        onClick={this.onClickFabric()}
                        className="list-item">Нет опций</div>
                }
            </div>
        );
    }

    onClickFabric = (item) => () => {
        if (this.props.onChange && this.state.selectedItem !== item) {
            this.props.onChange(item ? item.id : item);
        }
            

        this.setState({
            selectedItem: item
        });

        this.onToggle();
    }

    onToggle = () => {
        if (!this.state.isOpen) {
            document.body.addEventListener('click', this.onEmptyClick)
        } else {
            document.body.removeEventListener('click', this.onEmptyClick);
        }

        this.setState((prevState) => ({
            isOpen: !prevState.isOpen
        }));

    };

    onEmptyClick = (evt) => {
        const target = evt.target;

        if (this.wrapRef && !this.wrapRef.contains(target)) {
            this.onToggle();
        }
    };
}