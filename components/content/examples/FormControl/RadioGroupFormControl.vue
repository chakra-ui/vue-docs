<template>
  <CFormControl as='fieldset'>
    <CFormLabel as='legend'>
      Favorite Naruto Character
    </CFormLabel>
    <CRadioGroup v-model="items" default-value='naruto'>
      <CHStack>
        <div>
          <chakra.input type="radio" id="naruto" name="character" value="naruto" mr="2" />
          <chakra.label for="naruto">Naruto</chakra.label>
        </div>
        <div>
          <chakra.input type="radio" id="sasuke" name="character" value="sasuke" mr="2" />
          <chakra.label for="sasuke">Sasuke</chakra.label>
        </div>
        <div>
          <chakra.input type="radio" id="kakashi" name="character" value="kakashi" mr="2" />
          <chakra.label for="kakashi">Kakashi</chakra.label>
        </div>
      </CHStack>
    </CRadioGroup>
    <CFormHelperText>Select only if you're a fan.</CFormHelperText>
  </CFormControl>
</template>

<script lang="ts" setup>
const items = ref(["naruto", "sasuke"])

watchEffect(() => {
  console.log("items list updated", items.value)
})
</script>