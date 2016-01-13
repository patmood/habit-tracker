import React from 'react'

export default (props) => <div>
  <h2>Journal Entry</h2>
  <pre>{JSON.stringify(props)}</pre>
</div>
