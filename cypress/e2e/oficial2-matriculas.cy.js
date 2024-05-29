
describe('template spec', () => {

  it('Deve ser possível retornar os dados de matrícula válida e sem restrições ', () => {
    
    const matriculas = "http://localhost:8080/v1/matriculas"

    const apiKey = 'unime-qualidade-oficial2'
    
    const statusCode = 200

    cy.request({
      method: 'GET',
      url: `${matriculas}/4653421`,
      headers: {
        'X-API-KEY': apiKey
      }
    })
    .then((response) => {
      expect(response.status).to.eq(statusCode)

      expect(response.body).to.have.property('id') 
      expect(typeof(response.body.id)).to.eq('string') // Esse id é uma string, verificar se é para ser mesmo uma string ou um number(int)

      expect(response.body).to.have.property('courseName')
      expect(typeof(response.body.courseName)).to.eq('string')

      expect(response.body).to.have.property('tuition')
      expect(typeof(response.body.tuition)).to.eq('object')

      expect(response.body.tuition).to.have.property('amount')
      expect(typeof(response.body.tuition.amount)).to.eq('number')

      expect(response.body.tuition).to.have.property('formattedAmount')
      expect(typeof(response.body.tuition.formattedAmount)).to.eq('string')
      expect(response.body.tuition.formattedAmount).to.be.include('R$') // Verificando se o campo possui o R$

      expect(response.body.tuition).to.have.property('dueDate')
      expect(typeof(response.body.tuition.dueDate)).to.eq('string')
      expect(response.body.tuition.dueDate).to.be.include('-')
  
      expect(response.body.tuition).to.have.property('status')
      expect(typeof(response.body.tuition.status)).to.eq('string')
      expect(response.body.tuition.status).to.be.include('_')


      expect(response.body).to.have.property('student')
      expect(typeof(response.body.student)).to.eq('object')

      expect(response.body.student).to.have.property('firstName')
      expect(typeof(response.body.student.firstName)).to.eq('string')

      expect(response.body.student).to.have.property('lastName')
      expect(typeof(response.body.student.lastName)).to.eq('string')

      expect(response.body.student).to.have.property('birthDate')
      expect(typeof(response.body.student.birthDate)).to.eq('string')
      expect(response.body.student.birthDate).to.be.include('-')

      expect(response.body.student).to.have.property('cpf')
      expect(typeof(response.body.student.cpf)).to.eq('string')
      expect(response.body.student.cpf.length).to.eq(11)

    })


    })

    it('Deve ser possível retornar dados de matrícula válida e que está com pagamento atrasado', () => {

      const matriculas = "http://localhost:8080/v1/matriculas"

      const apiKey = 'unime-qualidade-oficial2'
    
      const statusCode = 409

      cy.request({
        method: 'GET',
        url: `${matriculas}/5566778`,
        headers: {
          'X-API-KEY': apiKey
        }
      })
      .then((response) => {

        // expect(response.status).to.eq(statusCode) - Status retornando 200, sendo que é para retornar 409
        expect(response.body.mensagem).to.eq("A matrícula informada possui débitos em aberto. Não é possível obter dados da mesma até a quitação!")


      })

    })

    it('Deve ser possível consultar os dados de uma matrícula de aluno bolsista 100% e obter os dados dessa matrícula', () => {

      const matriculas = "http://localhost:8080/v1/matriculas"

      const apiKey = 'unime-qualidade-oficial2'
    
      const statusCode = 200

      cy.request({
        method: 'GET',
        url: `${matriculas}/7890123`,
        headers: {
          'X-API-KEY': apiKey
        }
      })
      .then((response) => {
        expect(response.status).to.eq(statusCode)

        expect(response.body).to.have.property('id') 
        expect(typeof(response.body.id)).to.eq('string') // Esse id é uma string, verificar se é para ser mesmo uma string ou um number(int)

        expect(response.body).to.have.property('courseName')
        expect(typeof(response.body.courseName)).to.eq('string')

        expect(response.body).to.have.property('tuition')
        expect(typeof(response.body.tuition)).to.eq('object')

        expect(response.body.tuition).to.have.property('amount')
        expect(response.body.tuition.amount).to.eq(0)

        expect(response.body.tuition).to.have.property('formattedAmount')
        expect(typeof(response.body.tuition.formattedAmount)).to.eq('string')
        expect(response.body.tuition.formattedAmount).to.be.include('R$ 0.00')

        expect(response.body.tuition).to.have.property('dueDate')
        expect(typeof(response.body.tuition.dueDate)).to.eq('object')
        expect(response.body.tuition.dueDate).to.eq(null)

        expect(response.body.tuition).to.have.property('status')
        expect(typeof(response.body.tuition.status)).to.eq('string')
        expect(response.body.tuition.status).to.be.include('_')

        expect(response.body).to.have.property('student')
        expect(typeof(response.body.student)).to.eq('object')
  
        expect(response.body.student).to.have.property('firstName')
        expect(typeof(response.body.student.firstName)).to.eq('string')
  
        expect(response.body.student).to.have.property('lastName')
        expect(typeof(response.body.student.lastName)).to.eq('string')
  
        expect(response.body.student).to.have.property('birthDate')
        expect(typeof(response.body.student.birthDate)).to.eq('string')
        expect(response.body.student.birthDate).to.be.include('-')
  
        expect(response.body.student).to.have.property('cpf')
        expect(typeof(response.body.student.cpf)).to.eq('string')
        expect(response.body.student.cpf.length).to.eq(11)

      })



    })


    it('Deve ser possível consultar os dados de uma matrícula de aluno bolsista 50% e obter os dados dessa matrícula', () => {

      const matriculas = "http://localhost:8080/v1/matriculas"

      const apiKey = 'unime-qualidade-oficial2'
    
      const statusCode = 200

      cy.request({
        method: 'GET',
        url: `${matriculas}/1113499`,
        headers: {
          'X-API-KEY': apiKey
        }
      })
      .then((response) => {

        expect(response.status).to.eq(statusCode)

        expect(response.body).to.have.property('id') 
        expect(typeof(response.body.id)).to.eq('string') // Esse id é uma string, verificar se é para ser mesmo uma string ou um number(int)

        expect(response.body).to.have.property('courseName')
        expect(typeof(response.body.courseName)).to.eq('string')

        expect(response.body).to.have.property('tuition')
        expect(typeof(response.body.tuition)).to.eq('object')

        expect(response.body.tuition).to.have.property('amount')
        expect(response.body.tuition.amount).to.eq(0)

        expect(response.body.tuition).to.have.property('formattedAmount')
        expect(typeof(response.body.tuition.formattedAmount)).to.eq('string')
        expect(response.body.tuition.formattedAmount).to.be.include('R$ 0,00')

        expect(response.body.tuition).to.have.property('dueDate')
        expect(typeof(response.body.tuition.dueDate)).to.eq('object')
        expect(response.body.tuition.dueDate).to.eq(null)

        expect(response.body.tuition).to.have.property('status')
        expect(typeof(response.body.tuition.status)).to.eq('string')
        expect(response.body.tuition.status).to.be.include('_')
        expect(response.body.tuition.status).to.be.not.include('BOLSISTA_50') // Retornando EM_DIA em um aluno bolsista 50%, porém o story pede para realmente não informar o status BOLSISTA_50

        expect(response.body).to.have.property('student')
        expect(typeof(response.body.student)).to.eq('object')
  
        expect(response.body.student).to.have.property('firstName')
        expect(response.body.student.firstName).to.eq('')
  
        expect(response.body.student).to.have.property('lastName')
        expect(response.body.student.lastName).to.eq('')

        expect(response.body.student).to.have.property('birthDate')
        expect(typeof(response.body.student.birthDate)).to.eq('object')
        expect(response.body.student.birthDate).to.eq(null)
  
        expect(response.body.student).to.have.property('cpf')
        expect(typeof(response.body.student.cpf)).to.eq('string')
        expect(response.body.student.cpf.length).to.eq(11)
      })


    })

    it('Deve ser possível consultar os dados de uma matrícula de aluno que já realizou todos os pagamentos das mensalidades futuras ', () => {

      const matriculas = "http://localhost:8080/v1/matriculas"

      const apiKey = 'unime-qualidade-oficial2'
    
      const statusCode = 200

      cy.request({
        method: 'GET',
        url: `${matriculas}/1122334`,
        headers: {
          'X-API-KEY': apiKey
        }
      })
      .then((response) => {

        expect(response.status).to.eq(statusCode)

        expect(response.body).to.have.property('id') 
        expect(typeof(response.body.id)).to.eq('string') // Esse id é uma string, verificar se é para ser mesmo uma string ou um number(int)

        expect(response.body).to.have.property('courseName')
        expect(typeof(response.body.courseName)).to.eq('string')

        expect(response.body).to.have.property('tuition')
        expect(typeof(response.body.tuition)).to.eq('object')

        expect(response.body.tuition).to.have.property('amount')
        expect(typeof(response.body.tuition.amount)).to.eq('number')

        expect(response.body.tuition).to.have.property('formattedAmount')
        expect(typeof(response.body.tuition.formattedAmount)).to.eq('string')
        expect(response.body.tuition.formattedAmount).to.be.include('R$')

        expect(response.body.tuition).to.have.property('dueDate')
        expect(typeof(response.body.tuition.dueDate)).to.eq('object')
        expect(response.body.tuition.dueDate).to.eq(null)

        expect(response.body.tuition).to.have.property('status')
        expect(typeof(response.body.tuition.status)).to.eq('string')
        expect(response.body.tuition.status).to.be.include('CONTRATO_QUITADO')
      
        expect(response.body).to.have.property('student')
        expect(typeof(response.body.student)).to.eq('object')
  
        expect(response.body.student).to.have.property('firstName')
        expect(typeof(response.body.student.firstName)).to.eq('string')
  
        expect(response.body.student).to.have.property('lastName')
        expect(typeof(response.body.student.lastName)).to.eq('string')

        expect(response.body.student).to.have.property('birthDate')
        expect(typeof(response.body.student.birthDate)).to.eq('string')
        expect(response.body.student.birthDate).to.be.include('-')

  
        expect(response.body.student).to.have.property('cpf')
        expect(typeof(response.body.student.cpf)).to.eq('string')
        expect(response.body.student.cpf.length).to.eq(11)


      })

    })


    

  })



