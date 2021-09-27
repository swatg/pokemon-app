import React from 'react';
import styles from './style/badge.module.css';

interface BadgeProps {
  badgeStyle?: string,
  label: string,
}

const Badge = ({ badgeStyle, label }:BadgeProps) => (
  <div className={`${styles.badge} ${badgeStyle && styles[badgeStyle]} body2`}>
    <span className="body2">{ label }</span>
  </div>
)

Badge.defaultProps = {
  badgeStyle: '',
};


export default Badge;
