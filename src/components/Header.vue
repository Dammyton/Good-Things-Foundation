<template>
    <div id="herobanner">
       <b-container fluid >
            <b-row>
                <b-col class="d-flex align-items-center justify-content-center text-center" style="height:10rem;">
                    <div>
                        <h4 class="heading h4 mb-4">{{title}}</h4>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: ['title']
}
</script>

<style scoped>
#herobanner{
    background: url('../assets/img3.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.heading.h4{
    background: #17a2b8;
    color: #fff;
    width: fit-content;
    padding: 1rem;
    font-size: 2rem;
}

</style>