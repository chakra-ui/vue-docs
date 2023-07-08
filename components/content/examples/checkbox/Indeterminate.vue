<script lang="ts" setup>
import { computed, ref } from "vue"

import { CCheckbox, CStack } from "@chakra-ui/vue-next"

const checkedItems = ref([false, false])
function setCheckedItems(value: boolean[]) {
  checkedItems.value = [value[0], value[1]]
}

const allChecked = computed(() => checkedItems.value.every(Boolean))
const isIndeterminate = computed(
  () => checkedItems.value.some(Boolean) && !allChecked.value
)
</script>

<template>
  <CStack>
    <CCheckbox
      v-model="allChecked"
      :is-indeterminate="isIndeterminate"
      @change="
        (value) => {
          setCheckedItems([value, value])
        }
      "
    >
      Parent checkbox
    </CCheckbox>
    <CStack pl="6" mt="1" spacing="1">
      <CCheckbox
        :model-value="checkedItems[0]"
        @change="
          (value) => {
            setCheckedItems([value, checkedItems[1]])
          }
        "
      >
        Child Checkbox 1
      </CCheckbox>
      <CCheckbox
        :model-value="checkedItems[1]"
        @change="
          (value) => {
            setCheckedItems([checkedItems[0], value])
          }
        "
      >
        Child Checkbox 2
      </CCheckbox>
    </CStack>
  </CStack>
</template>