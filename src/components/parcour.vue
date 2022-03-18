<template>
  <div class="has-background">
    <div class="columns">
      <div class="column"></div>
      <div class="column">
        <Timeline
            :timeline-items="timelineItems"
            :message-when-no-items="messageWhenNoItems" style="color: white"/>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>


import Timeline from 'timeline-vuejs'

export default {
  name: "parcour",
  components: {
    Timeline
  },
  data: () => ({
    messageWhenNoItems: 'There are not items',
    timelineItems: [
      {
        from: new Date(2018, 7),
        title: 'Name',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.',
        /*color: 'red'*/
      },
      {
        from: new Date(2016, 1),
        title: 'Name',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
      },
      {
        from: new Date(2016, 6),
        title: 'Name',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
      },
      {
        from: new Date(2012, 1),
        title: 'Name',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
      }
    ]
  })
}
</script>

<style scoped>

.column{
  padding-top: 2rem;
}

.has-background{
  background: rgb(0,0,0);
}

</style>