# ReorderCdPipelinesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Application** | **string** | CD 应用名 | [default to undefined]
**PipelineIdsIndices** | [**Array&lt;PipelineIdIndex&gt;**](PipelineIdIndex.md) | 部署流程排序列表 | [default to undefined]

## Example

```typescript
import { ReorderCdPipelinesRequest } from './api';

const instance: ReorderCdPipelinesRequest = {
    Application,
    PipelineIdsIndices,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
