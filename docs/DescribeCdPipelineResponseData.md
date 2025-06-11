# DescribeCdPipelineResponseData

DescribeCdPipelineResponseData 结构

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Application** | **string** | 应用名 | [optional] [default to '']
**PipelineConfigId** | **string** | 部署流程 ID | [optional] [default to '']
**PipelineExecutionJsonContent** | **string** | 部署流程执行记录 JSON | [optional] [default to '']
**PipelineExecutionStatus** | **string** | 部署流程执行状态 | [optional] [default to '']
**PipelineName** | **string** | 部署流程名称 | [optional] [default to '']

## Example

```typescript
import { DescribeCdPipelineResponseData } from './api';

const instance: DescribeCdPipelineResponseData = {
    Application,
    PipelineConfigId,
    PipelineExecutionJsonContent,
    PipelineExecutionStatus,
    PipelineName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
