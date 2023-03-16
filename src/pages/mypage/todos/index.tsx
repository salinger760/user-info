import Auth from '@/components/templates/Auth'
import Content from '@/components/templates/Content'
import { Section } from '@/components/molecules/Heading/Section'
import { H } from '@/components/molecules/Heading/H'
import { TaskList } from '@/components/TaskList'
import { TaskForm } from '@/components/TaskForm'

//import { useLogout } from '@/hooks/useLogout'

const Todos = (): JSX.Element => {
  const pageTitle = 'Boilerplate'

  return (
    <Auth title={pageTitle}>
      <Content>
        <Section>
          <H>ToDo</H>
        </Section>
        <div>
          <div>
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </Content>
    </Auth>
  )
}

export default Todos
