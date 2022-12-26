import { useState } from "react";
import { Flex, Grid, Box } from "../Box";
import { CheckBoxLabel } from "./styles";
import { CheckboxProps } from "./types";

const Check = (props:any) => (
    <Flex flexDirection='column' alignItems='center'>
        <Grid
        onClick={props.onClick}
        style={{ cursor: !props.active ? 'pointer' : 'not-allowed' }}
        width={18}
        height={18}
        borderStyle='solid'
        borderWidth='1px'
        borderColor={!props.active ? '#696969' : '#8B40F4'}
        justifyContent='center'
        alignItems='center'
        borderRadius='50%'
        marginY='0.5rem'
    >
        <Box
         width={8}
         height={8}
         background={!props.active ? '#1A1A1A' : '#8B40F4'}
         borderRadius='50%'
        ></Box>
    </Grid>
    <CheckBoxLabel>{props.label}</CheckBoxLabel>
    </Flex>
)

const Checkbox = (props: CheckboxProps) => {

    const [checked, setChecked] = useState<number>(2)
    
    const onSelect = (index:number) => {
        if (props.disabled && props.disabled.includes(index)) return
        setChecked(index)
    }

    return (
        <Flex flexDirection='column'>
        {props.payers.map((i, index) => (
            <Check label={i.label} onClick={() => onSelect(index + 1)} key={index} active={index + 1 === checked} />
        ))}
        </Flex>
    )
}

Checkbox.defaultProps = {
    time: 1,
}

export default Checkbox