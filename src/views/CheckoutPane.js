import React, { Component } from 'react'
import {
  SideSheet,
  Pane,
  Heading,
  Paragraph,
  Tablist,
  Tab,
  Card
} from 'evergreen-ui'

class CheckoutPane extends Component {
  constructor(props) {
    super(props)
    this.state = { isShown: props.isShown }
  }

  closeView = () => this.setState({ isShown: false })

  selectTab = e =>
    this.setState({ selectedIndex: e.target.getAttribute('data-index') })

  render() {
    return (
      <SideSheet
        isShown={this.state.isShown}
        onCloseComplete={this.closeView}
        containerProps={{
          display: 'flex',
          flex: '1',
          flexDirection: 'column'
        }}
      >
        <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor='white'>
          <Pane padding={16} borderBottom='muted'>
            <Heading size={600}>Title</Heading>
            <Paragraph size={400} color='muted'>
              Optional description or sub title
            </Paragraph>
          </Pane>
          <Pane display='flex' padding={8}>
            <Tablist>
              {['Traits', 'Event History', 'Identities'].map((tab, index) => (
                <Tab
                  key={tab}
                  data-index={index}
                  isSelected={this.state.selectedIndex === index}
                  onSelect={this.selectTab}
                >
                  {tab}
                </Tab>
              ))}
            </Tablist>
          </Pane>
        </Pane>
        <Pane flex='1' overflowY='scroll' background='tint1' padding={16}>
          <Card
            backgroundColor='white'
            elevation={0}
            height={240}
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            <Heading>Some content</Heading>
          </Card>
        </Pane>
      </SideSheet>
    )
  }
}

CheckoutPane.defaultProps = {
  isShown: false
}

// mapStateToProps
export default CheckoutPane
