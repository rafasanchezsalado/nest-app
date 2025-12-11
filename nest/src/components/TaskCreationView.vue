<template>
    <!-- <ion-list mode="ios" lines="none" :inset="false">
        <ion-item>
            <InputText />
        </ion-item>

        <ion-item>
            <InputTextArea />
        </ion-item>

        <ion-item>
            <Select />
        </ion-item>

        <ion-item>
            <Checkbox />
        </ion-item>

        <ion-item>
            <Datetime :label="'Start date'" />
        </ion-item>

        <ion-item v-if="showEndDate === true">
            <Datetime :label="'End date'" />
        </ion-item>

        <ion-item>
            <Range />
        </ion-item>

        <div id="management_actions" class="management_actions">
            <ion-button fill="outline">Discard</ion-button>
            <ion-button fill="solid">Save</ion-button>
        </div>
    </ion-list> -->

    <form action="" method="post">
        <InputText />
        <InputTextArea />
        <Select />
        <Checkbox />
        <Datetime :label="'Start date'" />
        <Datetime v-if="showEndDate === true" :label="'End date'" />
        <Range />
    </form>
</template>

<script lang="ts">
import { IonInput, IonItem, IonList, IonDatetime, IonDatetimeButton, IonModal, IonRange, IonLabel, IonButton, IonCheckbox, IonSelect, IonSelectOption } from '@ionic/vue';
import Checkbox from './form/Checkbox.vue';
import Datetime from './form/Datetime.vue';
import InputText from './form/InputText.vue';
import InputTextArea from './form/InputTextArea.vue';
import Select from './form/Select.vue';
import Range from './form/Range_.vue';
export default {
    data() {
        return {
            name: '',
            description: '',
            repetition: '',
            showEndDate: false,
            stardDate: '',
            endDate: '',
            priority: 1
        }
    },
    components: {
        IonItem,
        IonList,
        IonRange,
        IonButton,
        Range,
        Select,
        Checkbox,
        Datetime,
        InputText,
        InputTextArea
    }
}
</script>

<style lang="css" scoped>
.management_actions {
    display: grid;
    grid-template-columns: auto auto;
    /* gap: .5rem; */
}
</style>