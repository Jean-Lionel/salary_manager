<template>
  <div class="">
    <h1>Liste des employees</h1>

    <table>
      <thead>
        <tr>


    <td> id  </td>
    <td> matricule  </td>
    <td> nom  </td>
    <td> prenom  </td>
    <td> anneeNaissance  </td>
    <td> genre  </td>
    <td> etatCivile  </td>
    <td> levelId  </td>
    <td> conjointFonction  </td>
    <td> telephone  </td>
    <td> email  </td>
    <td> matriculeInss  </td>
    <td> nombreDenfant  </td>
    <td> salaireDeBase  </td>
    <td> serviceId  </td>
    <td> fonctionId  </td>
    <td> agenceId  </td>
    <td> categorieId  </td>
    <td> banqueId  </td>
    <td> compte  </td>
    <td> dateEmbauche  </td>
    <td> dateCreated  </td>
    <td> dateModified  </td>
    <td> userCreated  </td>
    <td> userModified  </td>
    <td> version  </td>
    <td> etat  </td>
        </tr>

      </thead>

      <tbody>
        <tr v-for="employe in employees" :key="employe.id">
            <td> {{ employe.id}}  </td>
    <td > {{ employe.matricule}}  </td>
    <td> {{ employe.nom}}  </td>
    <td> {{ employe.prenom}}  </td>
    <td> {{ employe.anneeNaissance}}  </td>
    <td> {{ employe.genre}}  </td>
    <td> {{ employe.etatCivile}}  </td>
    <td> {{ employe.levelId}}  </td>
    <td> {{ employe.conjointFonction}}  </td>
    <td> {{ employe.telephone}}  </td>
    <td> {{ employe.email}}  </td>
    <td> {{ employe.matriculeInss}}  </td>
    <td> {{ employe.nombreDenfant}}  </td>
    <td> {{ employe.salaireDeBase}}  </td>
    <td> {{ employe.serviceId}}  </td>
    <td> {{ employe.fonctionId}}  </td>
    <td> {{ employe.agenceId}}  </td>
    <td> {{ employe.categorieId}}  </td>
    <td> {{ employe.banqueId}}  </td>
    <td> {{ employe.compte}}  </td>
    <td> {{ employe.dateEmbauche}}  </td>
    <td> {{ employe.dateCreated}}  </td>
    <td> {{ employe.dateModified}}  </td>
    <td> {{ employe.userCreated}}  </td>
    <td> {{ employe.userModified}}  </td>
    <td> {{ employe.version}}  </td>
    <td> {{ employe.etat}}  </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import axios from "axios"


export default {

  data(){
    return{
      employees : []
    }
  },
  mounted(){
    this.fetchData()

  },
  methods:{

    fetchData(){

      axios.get(this.$store.state.url+'employe')
        .then(response => {
          console.log(response)
          this.employees = response.data
        })
        .catch(err =>{
          console.log(err)
        })
    }

  }
  
}
</script>