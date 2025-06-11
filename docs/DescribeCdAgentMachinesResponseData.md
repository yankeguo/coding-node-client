# DescribeCdAgentMachinesResponseData

DescribeCdAgentMachinesResponseData 结构

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AgentMachines** | [**Array&lt;AgentMachine&gt;**](AgentMachine.md) | 堡垒机列表 | [optional] [default to undefined]
**PageNumber** | **number** | 页码 | [optional] [default to undefined]
**PageSize** | **number** | 每页条数 | [optional] [default to undefined]
**TotalPage** | **number** | 总共页数 | [optional] [default to undefined]
**TotalRow** | **number** | 总共条数 | [optional] [default to undefined]

## Example

```typescript
import { DescribeCdAgentMachinesResponseData } from './api';

const instance: DescribeCdAgentMachinesResponseData = {
    AgentMachines,
    PageNumber,
    PageSize,
    TotalPage,
    TotalRow,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
