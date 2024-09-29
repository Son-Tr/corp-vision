import { motion } from 'framer-motion'
import React from 'react'

const Ex = () => {
    const list = {
        hidden: {
            opacity: 0,
            transition: { when: "afterChildren" }
        }
    }

    const item = {
        hidden: {
            opacity: 0,
            transition: { duration: 2 }
        }
    }
    return (
        <motion.ul variants={list} animate="hidden">
            <motion.li variants={item} />
            <motion.li variants={item} />
        </motion.ul>
    )
}

export default Ex