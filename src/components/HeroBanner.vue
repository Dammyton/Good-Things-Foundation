<template>
    <div id="herobanner">
       <b-container fluid >
            <b-row>
                <b-col class="d-flex align-items-center text-left" style="height:30rem;">
                    <div>
                        <h4 class="heading h4 mb-4">Get online week 2021</h4>
                        <p style="max-width:30rem" class="paragraph sm mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo consequatur, odit quos est sequi suscipit tempora, adipisci non nam dolor quas deserunt iste.</p>
                         <b-button pill class="text-danger bg-white">Get involved now!</b-button>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'HeroBanner',
    components:{

    }
}
</script>

<style scoped>
#herobanner{
    background: url('../assets/img3.jpg');
    background-repeat: no-repeat;
    height: 500px;
    background-size: cover;
    background-position: center;
}
.heading.h4{
    background: #17a2b8;
    color: #fff;
    width: fit-content;
    padding: 1rem;
    font-size: 3rem;
}
p.paragraph.sm {
    background: #fff;
    padding: 0.5rem;
    color: #17a2b8;
    font-size: 1rem;
}

</style>