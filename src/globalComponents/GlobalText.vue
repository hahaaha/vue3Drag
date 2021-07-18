<template>
    <div :style={color,fontSize}>
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        color: {
            type: String
        },
        fontSize: {
            type: String
        }
    }
}
</script>