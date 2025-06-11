# InitProjectTemplateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProjectName** | **string** | 项目名 | [default to '']
**Sync** | **boolean** | 是否同步配置方案，取值 true 或者 false，不填默认为 false | [default to false]
**TemplateId** | **number** | 模板id，为DescribeConfigTemplateList接口返回的，如果这里TemplateType选PROJECT，则TemplateId参数有效，否则无效。 | [default to 0]
**TemplateType** | **string** | 模板类型，取值包括 SCRUM，CLASSIC，PROJECT | [default to '']

## Example

```typescript
import { InitProjectTemplateRequest } from './api';

const instance: InitProjectTemplateRequest = {
    ProjectName,
    Sync,
    TemplateId,
    TemplateType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
